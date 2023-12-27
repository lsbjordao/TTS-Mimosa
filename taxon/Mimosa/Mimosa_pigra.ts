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
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa pigra
const Mimosa_pigra = new Mimosa()
Mimosa_pigra.specificEpithet = 'pigra'

Mimosa_pigra.stems = new Stems()

Mimosa_pigra.stipule = new Stipule()
Mimosa_pigra.stipule.margin = new MarginStipule()
Mimosa_pigra.stipule.adaxial = new AdaxialStipule()
Mimosa_pigra.stipule.abaxial = new AbaxialStipule()

Mimosa_pigra.leaf = new Leaf()
Mimosa_pigra.leaf.petiole = new Petiole()
Mimosa_pigra.leaf.bipinnate = new Bipinnate()
Mimosa_pigra.leaf.bipinnate.rachis = new Rachis()
Mimosa_pigra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pigra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pigra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 8)
Mimosa_pigra.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(10)
Mimosa_pigra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pigra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(22)
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 36)
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pigra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pigra.inflorescence = new Inflorescence()
Mimosa_pigra.inflorescence.peduncle = new Peduncle()
Mimosa_pigra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pigra.flower = new Flower()
Mimosa_pigra.flower.bracteole = new Bracteole()
Mimosa_pigra.flower.calyx = new Calyx()
Mimosa_pigra.flower.corolla = new Corolla()

Mimosa_pigra.androecium = new Androecium()
Mimosa_pigra.androecium.filaments = new Filaments()
Mimosa_pigra.androecium.filaments.colour = 'pinkish'

Mimosa_pigra.ginoecium = new Ginoecium()
Mimosa_pigra.ginoecium.ovary = new Ovary()

Mimosa_pigra.fruit = new Fruit()
Mimosa_pigra.fruit.stipe = new Stipe()
Mimosa_pigra.fruit.replum = new Replum()
Mimosa_pigra.fruit.epicarp = new Epicarp()

Mimosa_pigra.seed = new Seed()


// Description authorship
Mimosa_pigra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pigra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pigra
export { Mimosa_pigra }