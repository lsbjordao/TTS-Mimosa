// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa dutrae
const Mimosa_dutrae = new Mimosa()
Mimosa_dutrae.specificEpithet = 'dutrae'

Mimosa_dutrae.stems = new Stems()

Mimosa_dutrae.stipule = new Stipule()
Mimosa_dutrae.stipule.margin = new MarginStipule()
Mimosa_dutrae.stipule.adaxial = new AdaxialStipule()
Mimosa_dutrae.stipule.abaxial = new AbaxialStipule()

Mimosa_dutrae.leaf = new Leaf()
Mimosa_dutrae.leaf.petiole = new Petiole()
Mimosa_dutrae.leaf.bipinnate = new Bipinnate()
Mimosa_dutrae.leaf.bipinnate.rachis = new Rachis()
Mimosa_dutrae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dutrae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dutrae.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dutrae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dutrae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(25)
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 55)
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(62)
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dutrae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dutrae.inflorescence = new Inflorescence()
Mimosa_dutrae.inflorescence.peduncle = new Peduncle()
Mimosa_dutrae.inflorescence.spicate = new Spicate()

Mimosa_dutrae.flower = new Flower()
Mimosa_dutrae.flower.bracteole = new Bracteole()
Mimosa_dutrae.flower.merism = '4-merous'
Mimosa_dutrae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dutrae.flower.calyx = new Calyx()
Mimosa_dutrae.flower.calyx.shape = 'paleaceous'
Mimosa_dutrae.flower.corolla = new Corolla()
Mimosa_dutrae.flower.corolla.shape = 'obovoid'

Mimosa_dutrae.androecium = new Androecium()
Mimosa_dutrae.androecium.filaments = new Filaments()
Mimosa_dutrae.androecium.filaments.colour = 'pinkish'

Mimosa_dutrae.ginoecium = new Ginoecium()
Mimosa_dutrae.ginoecium.ovary = new Ovary()

Mimosa_dutrae.fruit = new Fruit()
Mimosa_dutrae.fruit.stipe = new Stipe()
Mimosa_dutrae.fruit.replum = new Replum()
Mimosa_dutrae.fruit.epicarp = new Epicarp()

Mimosa_dutrae.seed = new Seed()


// Description authorship
Mimosa_dutrae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dutrae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dutrae
export { Mimosa_dutrae }