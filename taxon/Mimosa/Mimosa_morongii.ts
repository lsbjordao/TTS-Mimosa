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


// Description of Mimosa morongii
const Mimosa_morongii = new Mimosa()
Mimosa_morongii.specificEpithet = 'morongii'

Mimosa_morongii.stems = new Stems()

Mimosa_morongii.stipule = new Stipule()
Mimosa_morongii.stipule.margin = new MarginStipule()
Mimosa_morongii.stipule.adaxial = new AdaxialStipule()
Mimosa_morongii.stipule.abaxial = new AbaxialStipule()

Mimosa_morongii.leaf = new Leaf()
Mimosa_morongii.leaf.petiole = new Petiole()
Mimosa_morongii.leaf.bipinnate = new Bipinnate()
Mimosa_morongii.leaf.bipinnate.rachis = new Rachis()
Mimosa_morongii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_morongii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_morongii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_morongii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_morongii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 17)
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_morongii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_morongii.inflorescence = new Inflorescence()
Mimosa_morongii.inflorescence.peduncle = new Peduncle()
Mimosa_morongii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_morongii.flower = new Flower()
Mimosa_morongii.flower.bracteole = new Bracteole()
Mimosa_morongii.flower.merism = '4-merous'
Mimosa_morongii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_morongii.flower.calyx = new Calyx()
Mimosa_morongii.flower.calyx.shape = 'spathiform'
Mimosa_morongii.flower.corolla = new Corolla()
Mimosa_morongii.flower.corolla.shape = 'funnelform'

Mimosa_morongii.androecium = new Androecium()
Mimosa_morongii.androecium.filaments = new Filaments()
Mimosa_morongii.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_morongii.ginoecium = new Ginoecium()
Mimosa_morongii.ginoecium.ovary = new Ovary()

Mimosa_morongii.fruit = new Fruit()
Mimosa_morongii.fruit.stipe = new Stipe()
Mimosa_morongii.fruit.replum = new Replum()
Mimosa_morongii.fruit.epicarp = new Epicarp()

Mimosa_morongii.seed = new Seed()


// Description authorship
Mimosa_morongii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_morongii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa morongii
export { Mimosa_morongii }