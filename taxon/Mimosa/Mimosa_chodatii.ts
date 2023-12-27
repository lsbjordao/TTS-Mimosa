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


// Description of Mimosa chodatii
const Mimosa_chodatii = new Mimosa()
Mimosa_chodatii.specificEpithet = 'chodatii'

Mimosa_chodatii.stems = new Stems()

Mimosa_chodatii.stipule = new Stipule()
Mimosa_chodatii.stipule.margin = new MarginStipule()
Mimosa_chodatii.stipule.adaxial = new AdaxialStipule()
Mimosa_chodatii.stipule.abaxial = new AbaxialStipule()

Mimosa_chodatii.leaf = new Leaf()
Mimosa_chodatii.leaf.petiole = new Petiole()
Mimosa_chodatii.leaf.bipinnate = new Bipinnate()
Mimosa_chodatii.leaf.bipinnate.rachis = new Rachis()
Mimosa_chodatii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_chodatii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_chodatii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_chodatii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_chodatii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(25)
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 48)
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_chodatii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_chodatii.inflorescence = new Inflorescence()
Mimosa_chodatii.inflorescence.peduncle = new Peduncle()
Mimosa_chodatii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_chodatii.flower = new Flower()
Mimosa_chodatii.flower.bracteole = new Bracteole()
Mimosa_chodatii.flower.merism = '4-merous'
Mimosa_chodatii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_chodatii.flower.calyx = new Calyx()
Mimosa_chodatii.flower.calyx.shape = 'campanulate'
Mimosa_chodatii.flower.corolla = new Corolla()
Mimosa_chodatii.flower.corolla.shape = 'vase-shaped'

Mimosa_chodatii.androecium = new Androecium()
Mimosa_chodatii.androecium.filaments = new Filaments()
Mimosa_chodatii.androecium.filaments.colour = 'pinkish'

Mimosa_chodatii.ginoecium = new Ginoecium()
Mimosa_chodatii.ginoecium.ovary = new Ovary()

Mimosa_chodatii.fruit = new Fruit()
Mimosa_chodatii.fruit.stipe = new Stipe()
Mimosa_chodatii.fruit.replum = new Replum()
Mimosa_chodatii.fruit.epicarp = new Epicarp()

Mimosa_chodatii.seed = new Seed()


// Description authorship
Mimosa_chodatii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_chodatii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa chodatii
export { Mimosa_chodatii }