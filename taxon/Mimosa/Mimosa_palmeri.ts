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


// Description of Mimosa palmeri
const Mimosa_palmeri = new Mimosa()
Mimosa_palmeri.specificEpithet = 'palmeri'

Mimosa_palmeri.stems = new Stems()

Mimosa_palmeri.stipule = new Stipule()
Mimosa_palmeri.stipule.margin = new MarginStipule()
Mimosa_palmeri.stipule.adaxial = new AdaxialStipule()
Mimosa_palmeri.stipule.abaxial = new AbaxialStipule()

Mimosa_palmeri.leaf = new Leaf()
Mimosa_palmeri.leaf.petiole = new Petiole()
Mimosa_palmeri.leaf.bipinnate = new Bipinnate()
Mimosa_palmeri.leaf.bipinnate.rachis = new Rachis()
Mimosa_palmeri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_palmeri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_palmeri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_palmeri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(9)
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 19)
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(22)
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_palmeri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_palmeri.inflorescence = new Inflorescence()
Mimosa_palmeri.inflorescence.peduncle = new Peduncle()
Mimosa_palmeri.inflorescence.spicate = new Spicate()

Mimosa_palmeri.flower = new Flower()
Mimosa_palmeri.flower.bracteole = new Bracteole()
Mimosa_palmeri.flower.merism = '5-merous'
Mimosa_palmeri.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_palmeri.flower.calyx = new Calyx()
Mimosa_palmeri.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_palmeri.flower.corolla = new Corolla()
Mimosa_palmeri.flower.corolla.shape = 'funnelform'

Mimosa_palmeri.androecium = new Androecium()
Mimosa_palmeri.androecium.filaments = new Filaments()
Mimosa_palmeri.androecium.filaments.colour = 'pinkish'

Mimosa_palmeri.ginoecium = new Ginoecium()
Mimosa_palmeri.ginoecium.ovary = new Ovary()

Mimosa_palmeri.fruit = new Fruit()
Mimosa_palmeri.fruit.stipe = new Stipe()
Mimosa_palmeri.fruit.replum = new Replum()
Mimosa_palmeri.fruit.epicarp = new Epicarp()

Mimosa_palmeri.seed = new Seed()


// Description authorship
Mimosa_palmeri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_palmeri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa palmeri
export { Mimosa_palmeri }